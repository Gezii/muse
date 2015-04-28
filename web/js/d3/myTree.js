/**
 * d3 tree : 单步点击一个节点，动态加载数据
 * Created by Gezii on 2015/4/2.
 */

;(function(window,d3){

    var dd = {
        "name": "http://www." + Math.random() * 10 + ".com",
        "pv" : Math.ceil(Math.random() * 10000),
        "bn" : Math.ceil(Math.random() * 800),
        "children": []
    };
    var randomCount = Math.ceil(Math.random() * 100);

    for (i = 0; i < randomCount; i++){
        dd.children.push({
            "name": "http://www." + Math.random() * 10 + ".com",
            "pv" : Math.ceil(Math.random() * 10000),
            "bn" : Math.ceil(Math.random() * 800),
            "children": []
        })
    }

    var maxLabelLength = 0;
    var viewerWidth = 950;
    var viewerHeight = 600;
    var i = 0;
    var duration = 750;
    var root;

    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);
    var baseSvg = d3.select("#my-container").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight)
        .attr("class", "overlay")
        .call(zoomListener);

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .direction('se')
        .html(function(d) {
            return "<strong>URL:</strong> <span style='color:red'>" + d.name + "</span></br>"
                  + "<strong>PV:</strong> <span style='color:red'>" + d.pv + "</span></br>"
                  + "<strong>BN:</strong> <span style='color:red'>" + d.bn + "</span></br>";
        });
    baseSvg.call(tip);

    var svgGroup = baseSvg.append("g");
    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);
    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });

    //计算label最大长度
    function maxLabel(parent) {
        if (!parent) return;

        maxLabelLength = Math.max(parent.name.length, maxLabelLength);

        var children = parent.children && parent.children.length > 0 ? parent.children : null;
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                maxLabel(children[i]);
            }
        }
    }

    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    // 节点居中
    function centerNode(source) {
        var scale = zoomListener.scale();
        var x = -source.y0;
        var y = -source.x0;
        x = x * scale + 200;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    function onNodeClick(d) {
        if (d3.event.defaultPrevented) return; // click suppressed

        if (d.hasAjax || d.id === root.id) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            } else if (d._children) {
                d.children = d._children;
                d._children = null;
            }
        } else {
            // TODO 动态获取数据
            var randomCount = Math.ceil(Math.random() * 10);
            var node = {
                "name": d.name,
                "children": []
            };
            for (i = 0; i < randomCount; i++){
                node.children.push({
                    "name": "http://www." + Math.random() * 10 + ".com",
                    "pv" : Math.ceil(Math.random() * 10000),
                    "bn" : Math.ceil(Math.random() * 800),
                    "children": []
                })
            }

            maxLabel(node);
            d.children = node.children;
            d.hasAjax = true;
        }

        init(d);
    }

    function init(source){

        var levelWidth = [1];
        var childCount = function(level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 25; // 25 pixels per line
//        newHeight = newHeight > viewerHeight ? viewerHeight : newHeight;
        tree = tree.size([newHeight, viewerWidth]);

        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        nodes.forEach(function(d) {
            d.y = (d.depth * (maxLabelLength * 10)); //maxLabelLength * 10px
        });

        var node = svgGroup.selectAll("g.node")
            .data(nodes, function(d) {
                return d.id || (d.id = d.name);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
//            .call(dragListener)
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', onNodeClick)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr("r", 0)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText')
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            })
            .style("fill-opacity", 0);

        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            });

        // Change the circle fill depending on whether it has children and is collapsed
        node.select("circle.nodeCircle")
            .attr("r", 4.5)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 0);

        nodeExit.select("text")
            .style("fill-opacity", 0);

        // Update the links…
        var link = svgGroup.selectAll("path.link")
            .data(links, function(d) {
                return d.target.id;
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    maxLabel(dd);      //计算label最大长度
    root = dd;
    root.x0 = viewerHeight / 2;
    root.y0 = 0;
    init(root);
    centerNode(root);

})(window,d3);
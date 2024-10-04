//dynamic text
function typeText(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeText(element, text, index), 100);
    }
}

function drawDendrogram() {
    const data = {
        name: "Technologies",
        children: [
            { 
                name: "Front-End", 
                children: [
                    { name: "JavaScript" },
                    { name: "React" },
                    { name: "D3.js" },
                    { name: "HTML/CSS" }
                ]
            },
            { 
                name: "Back-End", 
                children: [
                    { name: "Flask" },
                    { name: "Python" },
                    { name: "Node.js" },
                    { name: "Express" }
                ]
            },
            { 
                name: "Database", 
                children: [
                    { name: "PostgreSQL" },
                    { name: "PL/SQL (Oracle)" },
                    { name: "MongoDB" }
                ]
            },
            { 
                name: "DevOps", 
                children: [
                    { name: "Docker" },
                    { name: "Kubernetes" },
                    { name: "AWS" }
                ]
            }
        ]
    };

    const svg = d3.select("#dendrogram").append("svg")
        .attr("width", "100%")
        .attr("height", "400px") 
        .append("g")
        .attr("transform", "translate(140,0)"); // Adjust translation to prevent cutting off

    const root = d3.hierarchy(data);
    const treeLayout = d3.tree().size([300, 200]);
    treeLayout(root);

    svg.selectAll(".link")
        .data(root.links())
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("x1", d => d.source.y)
        .attr("y1", d => d.source.x)
        .attr("x2", d => d.target.y)
        .attr("y2", d => d.target.x)
        .attr("stroke", "#ccc");

    // Nodes
    const nodes = svg.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`)
        .on("click", function(event, d) {
            d.children = d.children ? null : d._children; 
            drawDendrogram(); // Redraw the dendrogram to reflect changes
        });

    nodes.append("circle")
        .attr("r", 5)
        .attr("fill", "#69b3a2");

    nodes.append("text")
        .attr("dy", 3)
        .attr("x", d => d.children ? -8 : 8)
        .attr("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);
}


window.onload = () => {
    const dynamicTextElement = document.getElementById('dynamicText');
    const textToType = "Software/Systems Engineer";
    typeText(dynamicTextElement, textToType, 0); 
    drawDendrogram(); 
};

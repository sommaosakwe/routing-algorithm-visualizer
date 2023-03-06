//

var cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),
    layout: { name: "cose" }, //cose layout
    style: [
        {
            selector: "node",
            css: {
                content: "data(id)",
                "text-valign": "center",
                "text-halign": "center",
            },
        },
        {
            selector: "edge",
            css: {
                label: "data(weight)",
                "text-margin-y": 15,
                "text-rotation": "autorotate",
            },
        },
    ],

    elements: {
        nodes: [
            {
                data: {
                    id: "n0",
                },
            },
            {
                data: {
                    id: "n1",
                },
            },
            {
                data: {
                    id: "n2",
                },
            },
            {
                data: {
                    id: "n3",
                },
            },
            {
                data: {
                    id: "n4",
                },
            },
            {
                data: {
                    id: "n5",
                },
            },
            {
                data: {
                    id: "n6",
                },
            },
            {
                data: {
                    id: "n7",
                },
            },
            {
                data: {
                    id: "n8",
                },
            },
            {
                data: {
                    id: "n9",
                },
            },
            {
                data: {
                    id: "n10",
                },
            },
            {
                data: {
                    id: "n11",
                },
            },
        ],
        edges: [
            {
                data: {
                    id: "n0n1",
                    source: "n0",
                    target: "n1",
                    weight: 3,
                },
            },
            {
                data: {
                    id: "n0n4",
                    source: "n0",
                    target: "n4",
                    weight: 5,
                },
            },
            {
                data: {
                    id: "n0n3",
                    source: "n0",
                    target: "n3",
                    weight: 7,
                },
            },
            {
                data: {
                    id: "n1n2",
                    source: "n1",
                    target: "n2",
                    weight: 6,
                },
            },
            {
                data: {
                    id: "n2n3",
                    source: "n2",
                    target: "n3",
                    weight: 14,
                },
            },
            {
                data: {
                    id: "n2n7",
                    source: "n2",
                    target: "n7",
                    weight: 8,
                },
            },
            {
                data: {
                    id: "n3n4",
                    source: "n3",
                    target: "n4",
                    weight: 12,
                },
            },
            {
                data: {
                    id: "n3n7",
                    source: "n3",
                    target: "n7",
                    weight: 4,
                },
            },
            {
                data: {
                    id: "n3n6",
                    source: "n3",
                    target: "n6",
                    weight: 9,
                },
            },
            {
                data: {
                    id: "n4n5",
                    source: "n4",
                    target: "n5",
                    weight: 2,
                },
            },
            {
                data: {
                    id: "n5n6",
                    source: "n5",
                    target: "n6",
                    weight: 6,
                },
            },
            {
                data: {
                    id: "n5n10",
                    source: "n5",
                    target: "n10",
                    weight: 3,
                },
            },
            {
                data: {
                    id: "n6n7",
                    source: "n6",
                    target: "n7",
                    weight: 9,
                },
            },
            {
                data: {
                    id: "n7n8",
                    source: "n7",
                    target: "n8",
                    weight: 3,
                },
            },
            {
                data: {
                    id: "n7n9",
                    source: "n7",
                    target: "n9",
                    weight: 7,
                },
            },
            {
                data: {
                    id: "n8n9",
                    source: "n8",
                    target: "n9",
                    weight: 11,
                },
            },
            {
                data: {
                    id: "n8n11",
                    source: "n8",
                    target: "n11",
                    weight: 12,
                },
            },
            {
                data: {
                    id: "n10n11",
                    source: "n10",
                    target: "n11",
                    weight: 7,
                },
            },
        ],
    },
}));

//Need a way to save the graph to local storage, then pull that graph back if there are changes made to edges.

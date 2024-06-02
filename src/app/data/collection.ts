import ROOT_DIR from "./root";

const dir = `${ROOT_DIR}/collection-objects`;
const COLLECTION = [
    {
        name: "Pinned Objects",
        size: "5,000,000",
        covered: true,
        image: `${dir}/pinned-objects.png`,
    },
    {
        name: "Small Dry Objects",
        size: "7,500,000",
        covered: true,
        image: `${dir}/small-dry-objects.png`,
    },
    {
        name: "Large/Heavy Dry Objects",
        size: "50,000",
        covered: true,
        image: `${dir}/large-heavy-objects.png`,
    },
    {
        name: "Liquid Preserved Objects",
        size: "10,000,000",
        covered: true,
        image: `${dir}/liquid-preserved.png`,
    },
    {
        name: "Frozen Tissue Samples",
        size: "375,000",
        covered: false,
        image: `${dir}/frozen-tissue.png`,
    },
    {
        name: "Paper Based Objects",
        size: "500,000",
        covered: true,
        image: `${dir}/paper-based.png`,
    },
    {
        name: "Assemblages",
        size: "250,000",
        covered: true,
        image: `${dir}/assemblages.png`,
    },
    {
        name: "Audio Visual Objects",
        size: "1,250,000",
        covered: false,
        image: `${dir}/audio-visual.png`,
    },
];

export default COLLECTION;

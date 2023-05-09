import React from 'react';

/*
Tags:
 - Games (#86DF0)
 - Shows (#E76E6E)
 - Movies (#A99DF0)
 - Tech (#AFDFB7)
 - School (#DDCC74)
 - Projects (#DFAB8D)
 - Personal (#4851A1)
*/

function getTagColor(tag)
{
    switch (tag)
    {
        case 'Games':
            return "#86BDF0";
        case 'Shows':
            return "#E76E6E";
        case 'Movies':
            return "#A99DF0";
        case 'Tech':
            return "#AFDFB7";
        case 'School':
            return "#DDCC74";
        case 'Projects':
            return "#DFAB8D"
        case 'Personal':
            return "#4851A1"
        default:
            return "#F5A6D2";
    }
}

function Tag({ tag }) {
    const tagColor = getTagColor(tag);

    return (
        <div class={"tagContainer "+tag} style={{ backgroundColor: tagColor }}>
            {tag}
        </div>
    );
}

export default Tag;
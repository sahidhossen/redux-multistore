export function addBlock( data ) {
    return {
        type: 'ADD_BLOCK',
        data,
    };
}

export function addBlocks( data ) {
    return {
        type: 'ADD_BLOCKS',
        data,
    };
}

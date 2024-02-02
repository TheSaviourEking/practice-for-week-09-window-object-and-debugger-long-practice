export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    // Your code here
    return breadthFirstSearch(id, 'id');
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
    return breadthFirstSearch(tag, 'tag')
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
    return breadthFirstSearch(cls, 'class');
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
    return breadthFirstSearch(tag, 'tag', 'all');
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
    return breadthFirstSearch(cls, 'cls', 'all');
}

/**
 * 
 * @param {string} value 
 * @param {string} searchItemType 
 * @param {string} searchType 
 * @param {HTMLNode} root 
 * @returns: a node or array depending on the value of `searchType`;
 */
function breadthFirstSearch(value, searchItemType, searchType = "first", root = document.children[0]) {
    const searchTypeMap = {
        'id': 'id',
        'tag': 'tagName',
        'class': 'classList',
        'cls': 'classList'
    }

    const searchValue = searchTypeMap[searchItemType];

    const result = [];
    if (root) {
        const stack = [root];

        // while stack is not empty
        while (stack.length > 0) {
            let node = stack.splice(0, 1)[0];

            switch (searchType) {
                case 'first':
                    if (typeof node[searchValue] === 'object') {
                        for (let className of node[searchValue]) {
                            if (className === value) return node;
                        }
                    }
                    if (node[searchValue] === value) return node;
                    break;
                case 'all':
                    if (typeof node[searchValue] === 'object') {
                        for (let className of node[searchValue]) {
                            if (className === value) result.push(node);
                        }
                    }
                    if (node[searchValue] === value) result.push(node);
                default:
                    ;
            }

            for (let child of node.children) {
                if (child) {
                    stack.push(child);
                }
            }
        }
    }
    return result;
}

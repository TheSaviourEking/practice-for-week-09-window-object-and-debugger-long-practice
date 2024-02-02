const name = 'Saviour Eking'
export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    const title = `${name}'s Portfolio`;
    document.title = title;
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.body.children[0].children[0].innerText = `I am ${name}`;
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    const text = 'Hello there! I\'m passionate about technology and love creating innovative solutions. My journey in the tech world started with a curiosity for coding, and it has been an exciting adventure ever since. I enjoy tackling challenges and constantly expanding my skills to stay on the cutting edge of technology.'
    const paragraph = document.body.children[1].children[1];
    paragraph.innerText = text;
}

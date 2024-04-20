// JavaScript source code

const regexLinks = /(!)?\[\[(?:(.+?)\|)?(.+?)\]\]/g;
// Special thanks to Joschua, who wrote the regex for links used above: https://joschua.io/posts/2023/06/01/regex-for-obsidian-links/
const substLinks = '![$3]($3)';

const youtubeEmbed = /(!)?\[\]\(?(http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?)\)/g;
const youtubeSub = '{% include embed/youtube.html id=\'$3\' %}';

const copySuccessToast = document.getElementById('copySuccessToast')


function obsidianConvert() {

    var obsidianInput = document.getElementById('obsidian-input');
    var chirpyOutput = document.getElementById('chirpy-output');
    var converted_links = obsidianInput.value.replace(regexLinks, substLinks);
    var converted_links_and_embeds = converted_links.replace(youtubeEmbed, youtubeSub);
    chirpyOutput.value = converted_links_and_embeds;
}

const copyToClipboard = async () => {
    try {
        const element = document.getElementById('chirpy-output');
        await navigator.clipboard.writeText(element.value);
        console.log("Copied Successfully");
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
        // Optional: Handle and display the error to the user
    }
};
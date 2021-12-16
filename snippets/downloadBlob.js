export function downloadBlob(content: Blob, filename: string) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.download = filename;
    link.style.display = 'none';
    const href = URL.createObjectURL(new Blob([content]));
    link.href = href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

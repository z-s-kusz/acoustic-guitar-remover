const iframes = document.getElementsByTagName('IFRAME');

try {
    if (iframes && iframes.length) {
        for (let i = 0; i < iframes.length; i++) {
            let isVideo = false;
            const iframe = iframes[i];
            const attributes = iframe.attributes;

            for (let j = 0; j < attributes.length; j++) {
                const attribute = attributes[j];
                if (attribute.name === 'title' && attribute.value === 'video') isVideo = true;
            }
            if (isVideo) iframe.remove();
        }
    } else {
        console.error('no iframes found');
    }
} catch (err) {
    console.error('caught err', err);
}

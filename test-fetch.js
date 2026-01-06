async function test() {
    try {
        const res = await fetch('https://bhagavadgitaapi.in/slok/1/1');
        const data = await res.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error('Fetch failed:', e);
    }
}
test();

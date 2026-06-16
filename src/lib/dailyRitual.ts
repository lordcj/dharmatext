export const DAILY_MAPPINGS = [
    { day: 0, dayName: 'Sunday', deity: 'Surya Dev', slug: 'jai-kashyap-nandan', title: 'Jai Kashyap Nandan' },
    { day: 1, dayName: 'Monday', deity: 'Lord Shiva', slug: 'om-jai-shiv-omkara', title: 'Om Jai Shiv Omkara' },
    { day: 2, dayName: 'Tuesday', deity: 'Hanuman Ji', slug: 'hanuman-chalisa', title: 'Hanuman Chalisa' },
    { day: 3, dayName: 'Wednesday', deity: 'Lord Ganesha', slug: 'jai-ganesh-deva', title: 'Jai Ganesh Deva' },
    { day: 4, dayName: 'Thursday', deity: 'Lord Vishnu/Sai Baba', slug: 'achyutam-keshavam', title: 'Achyutam Keshavam' },
    { day: 5, dayName: 'Friday', deity: 'Goddess Lakshmi', slug: 'om-jai-laxmi-mata', title: 'Om Jai Laxmi Mata' },
    { day: 6, dayName: 'Saturday', deity: 'Shani Dev', slug: 'jai-shani-dev', title: 'Jai Shani Dev' },
];

export function getDailyContent() {
    const today = new Date().getDay();
    return DAILY_MAPPINGS[today];
}

export function getPanchangPlaceholder() {
    // In a real app, this would fetch from an API like Prokerala or DrikPanchang
    return {
        tithi: 'Shukla Paksha Dashami',
        nakshatra: 'Rohini',
        description: 'Today is auspicious for starting new ventures.'
    };
}

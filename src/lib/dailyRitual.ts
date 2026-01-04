export const DAILY_MAPPINGS = [
    { day: 0, dayName: 'Sunday', deity: 'Surya Dev', slug: 'aditya-hridaya-stotra' },
    { day: 1, dayName: 'Monday', deity: 'Lord Shiva', slug: 'shiv-chalisa' },
    { day: 2, dayName: 'Tuesday', deity: 'Hanuman Ji', slug: 'hanuman-chalisa' },
    { day: 3, dayName: 'Wednesday', deity: 'Lord Ganesha', slug: 'ganesh-chalisa' },
    { day: 4, dayName: 'Thursday', deity: 'Lord Vishnu/Sai Baba', slug: 'vishnu-sahasranama' },
    { day: 5, dayName: 'Friday', deity: 'Goddess Lakshmi', slug: 'lakshmi-aarti' },
    { day: 6, dayName: 'Saturday', deity: 'Shani Dev', slug: 'shani-chalisa' },
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

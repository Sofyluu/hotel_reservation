// Hotel data including name, rating, rates, and images
const hotels = [
    {
        name: "Lakewood",
        rating: 3,
        weekdayRegular: 110,
        weekdayReward: 80,
        weekendRegular: 90,
        weekendReward: 80,
        image: "https://images.unsplash.com/photo-1474690455603-a369ec1293f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Bridgewood",
        rating: 4,
        weekdayRegular: 160,
        weekdayReward: 110,
        weekendRegular: 60,
        weekendReward: 50,
        image: "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=2859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
    },
    {
        name: "Ridgewood",
        rating: 5,
        weekdayRegular: 220,
        weekdayReward: 100,
        weekendRegular: 150,
        weekendReward: 40,
        image: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

// Initialize date picker and search button event listener on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date-range", {
        mode: "range",
        dateFormat: "Y-m-d",
        minDate: "today",
    });

    document.getElementById('search-button').addEventListener('click', handleSearch);
});

// Handle search button click event
function handleSearch() {
    const detailsContainer = document.getElementById('hotel-details-container');
    detailsContainer.innerHTML = '';

    const dateRange = document.getElementById('date-range').value;
    const isRewardCustomer = document.getElementById('reward-customer').checked;

    if (!dateRange) {
        alert('Please select a date range');
        return;
    }

    const [startDate, endDate] = dateRange.split(' to ').map(date => {
        const [year, month, day] = date.split('-').map(Number);
        return new Date(year, month - 1, day);
    });

    const nights = (endDate - startDate) / (1000 * 60 * 60 * 24);

    const results = hotels.map(hotel => ({
        ...hotel,
        totalPrice: calculatePrice(hotel, startDate, nights, isRewardCustomer)
    }));

    results.sort((a, b) => {
        if (a.totalPrice === b.totalPrice) {
            return b.rating - a.rating;
        }
        return a.totalPrice - b.totalPrice;
    });

    displayResults(results, nights);
}

// Calculate total price based on hotel rates, date range, and customer type
function calculatePrice(hotel, startDate, nights, isReward) {
    let total = 0;
    let currentDate = new Date(startDate);

    for (let i = 0; i < nights; i++) {
        const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

        total += isWeekend
            ? (isReward ? hotel.weekendReward : hotel.weekendRegular)
            : (isReward ? hotel.weekdayReward : hotel.weekdayRegular);

        currentDate.setDate(currentDate.getDate() + 1);
    }
    return total;
}

// Display the sorted list of hotels based on search results
function displayResults(results, nights) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    results.forEach((hotel, index) => {
        const hotelCard = document.createElement('div');
        hotelCard.className = `hotel-card ${index === 0 ? 'best-deal' : ''}`;
        hotelCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
            <div class="hotel-info">
                <h2 class="hotel-name">${hotel.name}</h2>
                <div class="hotel-rating">${'★'.repeat(hotel.rating)}</div>
                <p class="hotel-price">Total: $${hotel.totalPrice} for ${nights} night${nights > 1 ? 's' : ''}</p>
                ${index === 0 ? '<p style="color: #fbbf24; font-weight: bold;">Best Deal!</p>' : ''}
                <button class="book-now">Book Now</button>
            </div>
        `;
        resultsContainer.appendChild(hotelCard);
    });
}

// Event listener for navigation links to display hotel details
document.querySelectorAll('.hotel-item a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const hotelName = this.parentElement.id.split('-')[1];
        const hotel = hotels.find(hotel => hotel.name.toLowerCase() === hotelName.toLowerCase());
        displayHotelDetails(hotel);
    });
});

// Display detailed information for a selected hotel
function displayHotelDetails(hotel) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    const detailsContainer = document.getElementById('hotel-details-container');
    detailsContainer.innerHTML = `
        <div class="hotel-card">
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
            <div class="hotel-info">
                <h2 class="hotel-name">${hotel.name}</h2>
                <div class="hotel-rating">${'★'.repeat(hotel.rating)}</div>
                <div class="hotel-rates">
                    <div>
                        <p><strong>Weekday Rates:</strong></p>
                        <p>Regular: $${hotel.weekdayRegular}</p>
                        <p>Reward: $${hotel.weekdayReward}</p>
                    </div>
                    <div>
                        <p><strong>Weekend Rates:</strong></p>
                        <p>Regular: $${hotel.weekendRegular}</p>
                        <p>Reward: $${hotel.weekendReward}</p>
                    </div>
                </div>
                <button class="book-now">Book Now</button>
            </div>
        </div>
    `;
}

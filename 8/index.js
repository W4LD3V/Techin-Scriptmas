const houses = [[1, 2], [3, 4], [5, 6]];
const speed = 10;

function calculateDeliveryTime(houses, speed) {
    let starting_coordinates = [0, 0];
    let total_distance = 0;

    for (let i = 0; i < houses.length; i++) {
        const [x, y] = houses[i];
        const distance = Math.sqrt((x - starting_coordinates[0]) ** 2 + (y - starting_coordinates[1]) ** 2);
        starting_coordinates = [x, y];
        total_distance += distance;
    }

    const distance_to_home = Math.sqrt(starting_coordinates[0] ** 2 + starting_coordinates[1] ** 2);
    total_distance += distance_to_home;

    const total_time = total_distance / speed;
    return total_time;
}

console.log(calculateDeliveryTime(houses, speed));

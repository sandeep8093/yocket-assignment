// In-memory data
let cities = [
  {
    name: "Yapkashnagar",
    distance: 60,
    image: "https://i.ibb.co/Ws23xF7/image.jpg",
    description:
      "Yapkashnagar: the Enigmatic Metropolis. A bustling city filled with secrets and mysteries around every corner.",
  },
  {
    name: "Lihaspur",
    distance: 50,
    image: "https://i.ibb.co/XDHzQhn/1.jpg",
    description:
      "Lihaspur: the Misty Labyrinth. Ancient temples shrouded in fog, whispers of forgotten tech.",
  },
  {
    name: "Narmis City",
    distance: 40,
    image: "https://i.ibb.co/Gsj3dhs/2.jpg",
    description:
      "Narmis City, the Steel Jungle. Towering skyscrapers and hidden underground networks.",
  },
  {
    name: "Shekharvati",
    distance: 30,
    image: "https://i.ibb.co/g9MBhk5/3.jpg",
    description:
      "Shekharvati, the Sun-Kissed Valley. Rolling hills and forgotten mining tunnels.",
  },
  {
    name: "Nuravgram",
    distance: 20,
    image: "https://i.ibb.co/1GVGWrf/4.jpg",
    description:
      "Nuravgram, the Quirky Village. Talking robots and malfunctioning AI guardians.",
  },
];

let vehicles = [
  { kind: "EV Bike", range: 60, count: 2 ,image:'https://i.ibb.co/nQhfKWp/5.jpg'},
  { kind: "EV Car", range: 100, count: 1 ,image:""},
  { kind: "EV SUV", range: 120, count: 1 ,image:""},
];

const cops = [
  { name: "John Doe", image: "https://i.ibb.co/Nr9sNr8/9.jpg" },
  { name: "Jane Smith", image: "https://i.ibb.co/9vD82G9/10.jpg" },
  { name: "Michael Johnson", image: "https://i.ibb.co/80jqJtm/11.jpg" },
];

// Simulate fugitive's location
const fugitiveLocation = cities[Math.floor(Math.random() * cities.length)];

exports.getCities = async (req, res) => {
  try {
    return res.status(200).json(cities);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getCops = async (req, res) => {
  try {
    return res.status(200).json(cops);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getVehicles = async (req, res) => {
  try {
    return res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.capture = async (req, res) => {
  try {
    const { copCity, copVehicle } = req.body;

    const copRange = vehicles.find(
      (vehicle) => vehicle.kind === copVehicle
    ).range;
    const copLocation = cities.find((city) => city.name === copCity);

    const distanceToFugitive = Math.abs(
      fugitiveLocation.distance - copLocation.distance
    );
    const successfulCapture = distanceToFugitive <= copRange;

    if (successfulCapture) {
      const capturingCop = cops[Math.floor(Math.random() * cops.length)];
      res.status(200).json({ success: true, capturingCop });
    } else {
      res.status(200).json({ success: false });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

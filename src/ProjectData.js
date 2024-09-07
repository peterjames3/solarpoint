import waterheater1 from "./assets/waterheater1.jpeg"
import waterheater2 from "./assets/waterheater2.jpeg"
import repair1 from './assets/repair1.jpeg'
import repair2 from './assets/repair2.jpeg'
import solarInstallation1 from './assets/solar-installation1.jpeg'
import solarInstallation2 from './assets/solar-installation2.jpeg'
import solarization1 from './assets/solarization1.jpeg'
import solarization2 from './assets/solarization2.jpeg'
import Unesco from "./assets/unesco.jpeg";
import unesco2 from "./assets/unesco2.jpeg";

export default [
    {
        id: 1,
        title: "World Vision Kenya – Chesangich",
        image: solarization1,
        content: "In 2023, we implemented a borehole solarization water pumping system using 15 solar panels with a 7.5 kW HANTI inverter, which was designed by Solarpoint System E.A. This project provided sustainable water access to the community.",
        client: "World Vision Kenya",
        year: 2023,
        otherImage1: solarization2,
        otherImage2: solarInstallation1,
        type: 'Borehole solarization'
    },
    {
        id: 2,
        title: "Solar Water Heater Projects",
        image: waterheater1,
        content: "We have installed solar water heating solutions for several homeowners in Nairobi. With skyrocketing electricity bills, Solarpoint Systems E.A provides families with a cost-saving and reliable way of enjoying hot showers through the installation of non-pressurized solar water heaters.",
        client: "Homeowners in Nairobi",
        year: 2023,
        otherImage1: waterheater2,
        otherImage2: waterheater1,
        type: 'Water Heater'
    },
    {
        id: 3,
        title: "Loitoktok Solar Installation",
        image: solarInstallation2,
        content: "We installed a 6KVA solar system that efficiently irrigates 20 acres of land. The system includes a customized solar pump that pumps 3000 liters per hour, using a 6.175 KWP pump to provide reliable irrigation for agriculture.",
        client: "Private Client in Loitoktok",
        year: 2023,
        otherImage1: solarInstallation1,
        otherImage2: solarInstallation2,
        type: 'Solar installation'
    },
    {
        id: 4,
        title: "UNESCO Nairobi Office Solar Installation",
        image: Unesco,
        content: "We supplied and installed an off-grid 5KWH solar system for the UNESCO offices in Nairobi to support air conditioners, lighting, and normal office power demands. This project demonstrates our capability in handling solar installations for institutional clients.",
        client: "UNESCO",
        year: 2023,
        otherImage1: Unesco,
        otherImage2: unesco2,
        type: 'Solar installation'
    },
    {
        id: 5,
        title: "Repair and Upgrading of Solar Backup Systems",
        image: repair2,
        content: "We provide services for repairing and upgrading existing solar power systems for our customers to ensure the systems meet their power demand and increase their days of autonomy. This service is crucial for clients looking to optimize their solar investments.",
        client: "Various Customers",
        year: 2023,
        otherImage1: repair1,
        otherImage2: repair2,
        type: 'Solar repair and upgrade'
    },
];

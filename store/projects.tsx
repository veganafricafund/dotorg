import { v4 as uuidv4 } from 'uuid';

export const projects = [{
    id: uuidv4(),
    name: "Vegan Basket",
    index: "01",
    url: "https://www.google.com/maps/place/Vegan+Basket/@-3.6172264,39.872539,15z/data=!4m5!3m4!1s0x0:0x578e23198552f01f!8m2!3d-3.6172264!4d39.872539",
    info: "Operating since 2019, Vegan Basket is based on the Kenya coast and has a mission of sharing delicious vegan food and educating the local community about veganism. We are helping them scale their efforts to increase food production capacity and manufacture vegan goods to provide to other vendors, restaurants, and grocery stores. We are working towards a vision of a vertically integrated veganic farm and food processing operation."
},
// {
//     id: uuidv4(),
//     name: "Current Education",
//     index: "02",
//     url: "https://current.education/",
//     info: "Current Education is providing a non-coercive self-directed learning platform to students in Africa, founded in 2021. The vegans running the organization are educating the youth about everything they’d need to know to pass a college admissions test, plus how to be a responsible and conscious citizen of earth. Vegan AF is providing services to help them curate educational content while sourcing art from vegan African artists."
// },
{
    id: uuidv4(),
    name: "Blobject",
    index: "02",
    url: "#",
    info: "Blobject is the technical services organisation that Vegan AF has partnered with to bring technical expertise and blockchain technology integrations to the Vegan AF platform. Our current project is creating a POS system that can be used for all Vegan AF partnered projects to manage inventory, accounting, orders, and payments, so that vegan African businesses are able to accept crypto payments, including payments in VAF."
}
]
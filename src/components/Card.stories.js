import Card from "./Card";

export default {
    title: "Practice/Card",
    component: Card,
    argTypes: {
        title: { control: "text" },
    }
}

// export const BasicCard = (args) => {
//     <Card {...args} />
// };

const Template = (args) => <Card {...args} />

export const BasicCard = Template.bind({});

BasicCard.args = {
    id: '1',
    title: "삭스러브 여자 최고급 소재 무지 중목 양말",
    price: "2690",
    imgUrl: "https://shopping-phinf.pstatic.net/main_2622509/26225092961.20210729175609.jpg",
}
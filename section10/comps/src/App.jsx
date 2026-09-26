import Accordion from './components/Accordion.jsx';

function App() {
    const items = [
        {
            id: 'l2kj5', // ID ngẫu nhiên
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'm25m0', // ID ngẫu nhiên
            label: 'Can I use JavaScript on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'v1p09', // ID ngẫu nhiên
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        }
    ];

    return (
        <Accordion items={items} />
    );
}

export default App;
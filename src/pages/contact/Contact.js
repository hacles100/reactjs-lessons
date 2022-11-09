import HelloWorld from "../../components/helloworld/HelloWorld";


function Contact() {

    const personData = [
        {
            name: 'Person One',
            bio: 'Bio for person one'
        },
        {
            name: 'Person Two',
            bio: 'Bio for person Two'
        },
        {
            name: 'Person Three',
            bio: 'Bio for person Three'
        },
        {
            name: 'Person Four',
            bio: 'Bio for person Four'
        }
    ];

    const title = 'Fixed title';
    const text = 'Fixed text';

    return (
        <div>
            <h1>CONTACT PAGE</h1>

            <HelloWorld
                title={title}
                text={text}
            />

            <hr />

            {personData.map((person, i) =>
                <HelloWorld
                    key={i}
                    title={person.name}
                    text={person.bio} />
            )}

        </div>
    );


}

export default Contact;
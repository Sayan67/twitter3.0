
import {faker} from '@faker-js/faker'

export function generateDummyTweet() {
    const userName = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }

    return {
        user: {
            name: faker.person.fullName(userName),
            id: faker.internet.userName(userName),
        },
        isLiked: Math.random() * 10 > 5,
        postedAt: faker.date.anytime(),
        content: faker.lorem.paragraph(4)
    }
}

export function generateDummyUser({id}) {
    const userName = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }

    return {
        name: faker.person.fullName(userName),
        id: id || faker.internet.userName(userName),
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMBAlI6a1yr71frtUFSVQwvL-rPW0EOjV_tv3cWCYpnFhvka3m',
    }
}
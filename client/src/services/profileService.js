import { fetchFromServer } from './service'
// import dummyPicData from './dummyProfileData'
import { object } from 'prop-types';


const allData = {
    "5": {
        dataOfAbout: {
            description: "about started with it ",
            programing_languages: "about started with it ",
            skills: "about started with it",
            experience: "about started with it"
        },
        dataOfContact: {
            date_of_birth: "contact started with it",
            address: "contact started with it",
            phone: "contact started with it"
        },
        dataOfProfileHome: {
            name: "profHome started with it",
            title: "profHome started with it",
            main_description: "profHome started with it"
        },
        profilePic: {
            picName: "some pic",
            picType: "png",
            picData: 'kaki of yonim'
        }
    }
}

const isRealServer = true;
export const getProfileData = async (profileId) => {
    if (isRealServer) {

        //call the server by id.
        try {
            return await fetchFromServer(`/profile?profileId=${profileId}`, 'GET')
        }
        catch (err) {
            // todo : handle catch
        }
    }
    else {
        return await allData["5"]
    }
}

export const setProfileData = async (profileId, data) => {

    if (isRealServer) {
        //call the server by id.
        try {
            return await fetchFromServer(`/profile?profileId=${profileId}`, 'PUT', data)

        }
        catch (err) {
            // todo : handle catch
        }
    }
    else {
        console.log('this is the id: ' + profileId)
        console.log('this is the data: ')
        console.log(data)
        return await '5'
        // nothing to do its here
    }
}

export const serverRegister = async (email, password) => {
    try {
        const response = await fetchFromServer('user', 'POST', { email, password })
        return response.id
    }
    catch (err) {
        console.log("error" + err)
        // todo : handle catch
    }
}


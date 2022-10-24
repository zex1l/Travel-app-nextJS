import japanImg from '../../assets/img/japan.jpg'
import { NextApiRequest, NextApiResponse } from 'next';
import {IPlace} from '../../app/types/place'

const places : IPlace[] = [
    {
        slug : 'Tokyo',
        location : 'Japan',
        pathName : japanImg.src,
        desription : 'Best place in Japan',
        rating : 7,
        duration : '10 days',
        distance : 5,
        googleMapLink : 'www.google.com'
    },
]


export default function handler (req : NextApiRequest, res : NextApiResponse){
    res.status(200).json(places)
}
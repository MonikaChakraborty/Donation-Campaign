import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsPage from "./DetailsPage";

const DonationDetails = () => {

    const[donationDetail, setDonationDetail] = useState()

    const {title} = useParams()

    const donationDetails = useLoaderData()

    useEffect(() => {
        const findDetail = donationDetails?.find(donationDetail => donationDetail.title === title)

        setDonationDetail(findDetail)

    }, [title, donationDetails])

    console.log(donationDetail);
    
    return (
        <div>
            <DetailsPage donationDetail={donationDetail}></DetailsPage>
        </div>
    );
};

export default DonationDetails;
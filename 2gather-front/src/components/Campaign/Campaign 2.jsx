const Campaign = (campaign) => {
    const {title, campaignImage, goal, endDate, status} = campaign;
    return (
        <div>
            <img src={campaignImage} alt={title} />
        <div>
            <h1>{title}</h1>
        </div>
        </div>
    )
}
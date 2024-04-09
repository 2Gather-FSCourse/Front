import {
    Breadcrumbs as MUIBreadcrumbs,
    Link,
    Typography
} from '@mui/material';


const Breadcrumbs = props => {
    const {path} = props;
    return (
        <MUIBreadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
                Home
            </Link>
            <Link color="inherit" href="/campaigns">
                Campaigns
            </Link>
            <Typography color="textPrimary">Campaign List</Typography>
        </MUIBreadcrumbs>
    );
};


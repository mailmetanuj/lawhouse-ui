import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Grid } from "@material-ui/core";

const socialMediaAccounts = [
    {
        id: "facebook",
        icon: FacebookIcon,
        url: "https://facebook.com"
    },
    {
        id: "instagram",
        icon: InstagramIcon,
        url: "https://instagram.com"
    },
    {
        id: "whatsapp",
        icon: WhatsAppIcon,
        url: "https://whatsapp.com"
    }
];

export default function SocialMediaIcons() {
    return (
        <Grid direction="row" spacing={1} justify="flex-end" style={{paddingRight: '40px', marginTop: '-40px'}}
         alignItems="center" container>
            {
                socialMediaAccounts.map((item) => {
                    return (
                        <Grid key={item.id} item>
                            <a href={item.url}>{<item.icon />}</a>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}
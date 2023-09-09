import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
    return (
        <footer className="mx-auto flex  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6  ">
            <Typography className="font-normal">
                Made With ❤️ by Team Resurgence
            </Typography>
        </footer>
    );
}

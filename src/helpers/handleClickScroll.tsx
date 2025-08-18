export const handleClickScroll = (event: React.MouseEvent<any>, id: string) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

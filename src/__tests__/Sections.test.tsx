import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';

describe('All sections ant its components are present in HomePage', () => {
    it('Header is present`', () => {
        render(<Home />);

        const logoIcon = screen.getByAltText('Header J smile logo');
        const aboutButton = screen.getByRole('button', {
            name: 'Go to about section with experience and education information',
        });
        const contactButton = screen.getByRole('button', {
            name: 'Go to contact section with contact form',
        });
        const githubIcon = screen.getByTestId('header-github-icon');
        const linkedinIcon = screen.getByTestId('header-linkedin-icon');

        expect(logoIcon).toBeInTheDocument();
        expect(aboutButton).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();
        expect(githubIcon).toBeInTheDocument();
        expect(linkedinIcon).toBeInTheDocument();
    });
    it('HeroBanner is present`', () => {
        render(<Home />);

        const devName = screen.getByText('Jessica Ladislau');
        const devRole = screen.getByText('Software Engineer');
        const downloadResumeButton = screen.getByRole('button', { name: 'Download resume' });

        expect(devName).toBeInTheDocument();
        expect(devRole).toBeInTheDocument();
        expect(downloadResumeButton).toBeInTheDocument();
    });
    it('Carousel of stacks is present', () => {
        render(<Home />);
        const listSize = 30;

        const listOfIcons = screen.getAllByAltText(/^carousel-icon/);
        expect(listOfIcons.length).toBe(listSize);
    });
    it('Info cards are present', () => {
        render(<Home />);

        const yearsCard = screen.getByText('exp');
        const figmaCard = screen.getByText('Curious?');
        const experienceCard = screen.getByText('Experience');
        const educationCard = screen.getByText('Education');

        expect(yearsCard).toBeInTheDocument();
        expect(figmaCard).toBeInTheDocument();
        expect(experienceCard).toBeInTheDocument();
        expect(educationCard).toBeInTheDocument();
    });
    it('Quality cards are present', () => {
        render(<Home />);

        const fastBuidCard = screen.getByText('Fast build');
        const bugHunterIcon = screen.getByText('Bug hunter');
        const gameLoverIcon = screen.getByText('Game lover');
        const creativeCoderIcon = screen.getByText('Creative coder');

        expect(fastBuidCard).toBeInTheDocument();
        expect(bugHunterIcon).toBeInTheDocument();
        expect(gameLoverIcon).toBeInTheDocument();
        expect(creativeCoderIcon).toBeInTheDocument();
    });
    it('How I Turn ideas into interfaces section is present', () => {
        render(<Home />);

        const sectionTitle = screen.getByText('How I turn ideas into interfaces');
        const taskCard = screen.getByText('1. Task');
        const questionsCard = screen.getByText('2. Questions');
        const featureCard = screen.getByText('3. Feature');
        const testsIcon = screen.getByText('4. Tests');
        const launchIcon = screen.getByText('5. Launch');

        expect(sectionTitle).toBeInTheDocument();
        expect(taskCard).toBeInTheDocument();
        expect(questionsCard).toBeInTheDocument();
        expect(featureCard).toBeInTheDocument();
        expect(testsIcon).toBeInTheDocument();
        expect(launchIcon).toBeInTheDocument();
    });
    it('List of feedback is present', () => {
        render(<Home />);

        const sectionTitle = screen.getByText('What people say about me');
        const quickCreateCard = screen.getByText(
            'She is able to quickly create UI pages and write complex code with ease. Having her on the team has been a great help to reach our timelines.',
        );
        const hitsTheTargetCard = screen.getByText(
            "In many cases it takes wireframe designers many iterations to 'nail' the concept, but Jessica hits the target on almost every first try.",
        );
        const precisionCard = screen.getByText(
            'Her skills and dedication are remarkable, and we can always depend on her to tackle any task with precision and efficiency.',
        );
        const attentionToDetailCard = screen.getByText(
            'Her meticulous attention to detail and unwavering dedication have been instrumental in ensuring the success of this critical deliverable.',
        );
        const onTrackCard = screen.getByText(
            'She helps ensure that we are on track using the latest and greatest in technology, security, and design implementation.',
        );
        const extraMileCard = screen.getByText(
            'She is always willing to go the extra mile, spending effort to support us, she ensures that we are getting all the details required to continue our work.',
        );

        expect(sectionTitle).toBeInTheDocument();
        expect(quickCreateCard).toBeInTheDocument();
        expect(hitsTheTargetCard).toBeInTheDocument();
        expect(precisionCard).toBeInTheDocument();
        expect(attentionToDetailCard).toBeInTheDocument();
        expect(onTrackCard).toBeInTheDocument();
        expect(extraMileCard).toBeInTheDocument();
    });
    it('Contact section is present', () => {
        render(<Home />);

        const sectionTitle = screen.getByText("Let's connect");
        const nameInput = screen.getByLabelText('Name');
        const emailInput = screen.getByLabelText('Email');
        const messageInput = screen.getByLabelText('Message');
        const sendButton = screen.getByRole('button', { name: 'Send' });

        expect(nameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(messageInput).toBeInTheDocument();
        expect(sectionTitle).toBeInTheDocument();
        expect(sendButton).toBeInTheDocument();
    });
    it('Footer section is present', () => {
        render(<Home />);

        const copy = screen.getByText('© All rights reserved');
        const madeBy = screen.getByText('Made by Jessica Ladislau');

        expect(copy).toBeInTheDocument();
        expect(madeBy).toBeInTheDocument();
    });
});

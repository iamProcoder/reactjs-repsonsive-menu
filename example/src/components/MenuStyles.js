import styled from 'styled-components';

const NavigationWrapper = styled.nav`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0rem;
    background-color: ${props => props.navigationBackgroundColor || '#fff'};
    color: black;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

const MenuTitle = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
    cursor: pointer;
    background-color: ${props => props.navigationBackgroundColor || '#fff'};
`;

const NavigationMenu = styled.div`
    margin-left: auto;
    
`;
const List = styled.ul`
    display: flex;
    padding: 0;
    background-color: ${props => props.navigationBackgroundColor || '#fff'};

    @media screen and (max-width: 768px) {
        position: absolute;
        top: 60px;
        left: 0;
        flex-direction: column;
        width: 100%;
        height: calc(100vh - 77px);
        background-color: white;
        border-top: 1px solid black;
        display: none;
    }
`;
const ListItem = styled.li`
    list-style-type: none;
    margin: 0 1rem;

    @media screen and (max-width: 768px) {
        text-align: center;
        margin: 0;

        &:hover {
            background-color: #eee;
        }
    }
`;
const ListItemA = styled.a`
    text-decoration: none;
    display: block;
    width: 100%;
    cursor: pointer;
    background-color: ${props => props.navigationBackgroundColor || '#fff'};

    @media screen and (max-width: 768px) {
        color: black;
        width: 100%;
        padding: 1.5rem 0;        
    }
`;

const Hambuger = styled.button`
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;

    &:hover {
        background-color: #ebebec;
    }

    @media screen and (max-width: 768px) {
        display: block;
    }

    svg {
        background-color: ${props => props.navigationBackgroundColor || '#fff'};
    }
`;

const NavigationMenuExpand = styled(NavigationMenu)`
    @media screen and (max-width: 768px) {
        ul {
            display: block;
        }
    } 
`;

export { NavigationWrapper, MenuTitle, NavigationMenu, List, ListItem, ListItemA, Hambuger, NavigationMenuExpand };
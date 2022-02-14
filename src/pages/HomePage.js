import React from "react";
import styled from "styled-components";
import { v } from "../styles/variables";
import Card from "../components/UI/Card/Card";

const HomePage = () => {
    return (
        <SHomeGrid>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </SHomeGrid>
    );
};

const SHomeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${v.mdSpacing};

    > div:nth-child(5) {
        grid-column: 1 / span 3;
    }
`;

export default HomePage;

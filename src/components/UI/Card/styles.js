import styled from "styled-components";
import { v } from "../../../styles/variables";

export const SCard = styled.div`
    background: ${({ theme }) => theme.bg};
    padding: ${v.mdSpacing};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
`;

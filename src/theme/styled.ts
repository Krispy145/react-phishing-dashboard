import styled from 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme['colors'];
    shadows: Theme['shadows'];
  }
}

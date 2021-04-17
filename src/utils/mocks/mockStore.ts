import configureMockStore from 'redux-mock-store';
import { RootStore } from '../../model/RootStore';

export const mockStore = configureMockStore<RootStore>([]);

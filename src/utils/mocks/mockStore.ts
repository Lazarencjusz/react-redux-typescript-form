import configureMockStore from 'redux-mock-store';
import { RootStore } from '../../model/RootStore';
import { DeepPartial } from '../DeepPartial';

export const mockStore = configureMockStore<DeepPartial<RootStore>>([]);

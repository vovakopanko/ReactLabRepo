import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TItems = {
  tagName: string;
};

type TtagCollection = {
  items: TItems[];
};

export type TEvents = {
  endDate: string;
  sys: {
    id: string;
  };
  eventDescription: string;
  eventLocation: string;
  eventMainImage: string;
  eventName: string;
  startDate: string;
  tagCollection: TtagCollection;
  category: {
    title: string;
  };
};

export type TEventsSort = {
  endDate: string;
  eventDescription: string;
  eventLocation: string;
  eventMainImage: string;
  eventName: string;
  startDate: string;
  tagCollection: any;
};

export type TEventsState = {
  events: TEvents[];
  selectedEventIndex: number;
  notificationState: boolean;
};

const initialState: TEventsState = {
  events: [],
  selectedEventIndex: -1,
  notificationState: false,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    pushEvents: (state, action: PayloadAction<TEvents[]>) => {
      state.events = action.payload;
    },
    selectEventIndex: (state, action: PayloadAction<number>) => {
      state.selectedEventIndex = action.payload;
    },
    changeNotificationState: (state, action: PayloadAction<boolean>) => {
      state.notificationState = action.payload;
    },
  },
});

const { actions, reducer } = eventsSlice;

export const { pushEvents, selectEventIndex, changeNotificationState } = actions;

export default reducer;

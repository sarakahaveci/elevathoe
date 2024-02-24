// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/store/apps/chat'
import user from 'src/store/apps/user'
import email from 'src/store/apps/email'
import calendar from 'src/store/apps/calendar'
import permissions from 'src/store/apps/permissions'
import customer from 'src/store/apps/customer'
import maintainer from 'src/store/apps/maintainer'
import project from 'src/store/apps/project'
import elevator from 'src/store/apps/elevator'
import call from 'src/store/apps/call'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    calendar,
    permissions,
    customer,
    maintainer,
    project,
    elevator,
    call
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

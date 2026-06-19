The Android app supports local event history to more easily get back to where you were listening if the audio seeks incorrectly and to help debug sync issues.

To access the listen history, you can use the 3-dot menu on a library item and then select the "History" option.

![History menu option](/pages/app_listen_history/history_menu.png)

Each row of the listening history contains the following local events:
- The real time of the event
- What event was recorded
- The time position in the book (not scaled by playback speed)
- A "sync status" indicator if the event should sync with the server

The types of events are:
- Play
- Pause (will save progress to server)
- Save (will save progress to server)
- Seek
- Sync (get progress from server)

Every event is reported on its own line, with the exception of `Save` events due to the high frequency of events compared to other event types. The `Save` event will indicate how many events were collapsed to the same entry.

![History](/pages/app_listen_history/history.png)

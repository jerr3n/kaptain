enum methods {
    gcode = "notify_gcode_response",
    subscription = 'notify_status_update',
    listChanged = "notify_filelist_changed",
    throttling = "notify_cpu_throttled",
    statistic = "notify_proc_stat_update",
    history = "notify_history_changed",
    sudo = "notify_sudo_alert",
    webcams = "notify_webcams_changed",
}

namespace methods {
    enum user{
        created= "notify_user_created",
        deleted= "notify_user_deleted",
        loggedout = "notify_user_logged_out",
    }
    enum manager {
        response = "notify_update_response",
        refreshed = "notify_update_refreshed",
    }
    enum klippy {
        ready = "notify_klippy_ready",
        shutdown = "notify_klippy_shutdown",
        disconnect = "notify_klippy_disconnect",
    }
    enum announcement {
        update = "notify_announcement_update",
        dismissed = "notify_announcement_dismissed",
        wake = "notify_announcement_wake",
    }
    enum spoolman {
        set = "notify_active_spool_set",
        changed = "notify_spoolman_status_changed",

    }
}


"""Scheduler entrypoint — runs as its own process, separate from the web worker.

Per the Design Blueprint (Bagian 2.2), the scheduler only ever generates
recurring tasks, sends reminder/lateness notifications, and escalates SLAs.
It never mutates task status. Jobs are registered starting Phase 5.
"""

import logging

from apscheduler.schedulers.blocking import BlockingScheduler

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("caretrack.scheduler")


def main() -> None:
    scheduler = BlockingScheduler(timezone="UTC")
    logger.info("CareTrack scheduler started — no jobs registered yet (added from Phase 5)")
    scheduler.start()


if __name__ == "__main__":
    main()

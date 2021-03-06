import {Component, OnInit} from '@angular/core';
import {globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON} from "./event-bus";
import {testLessons} from "../shared/model/test-lessons";
import { Lesson } from '../shared/model/lesson';

@Component({
    selector: 'event-bus-experiments',
    templateUrl: './event-bus-experiments.component.html',
    styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

    lessons: Lesson[] = [];

    ngOnInit() {

        console.log('Top level component broadcasted all lessons ...');
        this.lessons = testLessons;

        globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE,
            this.lessons);

        setTimeout(() => {
            this.lessons.push({
                id: Math.random(),
                description: 'New lesson arriving in the backend'
            })

            globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);
        }, 1000);

    }

    addLesson(lessonText: string) {
        globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
    }

}













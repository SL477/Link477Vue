<script setup lang="ts">
    import { ref, computed, reactive, onMounted } from 'vue'
    import TestComponent from './TestComponent.vue';
    import TweetSection from './TweetSection.vue';
    import TweetMessage from './TweetMessage.vue';
    const dataObject = reactive({
        title: "This is an alert message!",
        titleHTML: "Test <span class='badge'>Portfolio</span>",
        projects: [
            {title: "portfolio", languages: ["HTML","CSS","VueJS"], likes: 0},
            {title: "grocery shop", languages: ["HTML","CSS","PHP"], likes: 0},
            {title: "blog", languages: ["HTML","CSS","PHP"], likes: 0},
            {title: "automation script", languages: ["python"], likes: 0},
            {title: "eCommerce", languages: ["HTML","CSS","PHP"], likes: 0},
        ],
        dynamicId : "projects_section",
        dynamicClass: "projects",
        disabled: true,
        attribute_name: "href",
        url: "https://link477.com",
        event_name: "click",
        firstName: "Tom",
        lastName: "Fishwick",
        showTitle: true,
        movieTitle: "Shining",
        age: 0,//userAge,
        max_length: 200
    });

    const tweet = ref("");
    const tweets = ref<string[]>([]);

    const maxCharsText = computed(() => {
        return `Max: ${tweet.value.length} of ${dataObject.max_length} characters`;
    });

    const errorMessage = computed(() => {
        return `Max char limit reached! Excess chars: ${dataObject.max_length - tweet.value.length}`;
    });
    
    const getFullName = () => {
        return `${dataObject.firstName} ${dataObject.lastName}`;
    };

    const runFunction = () => {
        console.log("Test Click Function", dataObject.firstName, dataObject.lastName);
    };

    interface ProjectObj {
        title: string;
        languages: string[];
        likes: number;
    }

    const likeProject = (project: ProjectObj) => {
        if (!localStorage.getItem(project.title)) {
            project.likes++;
            localStorage.setItem(project.title, "1");
        }
    };

    const removeLike = (project: ProjectObj, event: MouseEvent) => {
        event.preventDefault(); //This can be omitted if we use the prevent key modifier
        if (project.likes > 0 && localStorage.getItem(project.title)) {
            project.likes--;
            localStorage.removeItem(project.title);
        }
    };

    const submitData = () => {
        if (tweets.value.length <= dataObject.max_length) {
            tweets.value.unshift(tweet.value);
            tweet.value = "";
        }
    };

    onMounted(() => {
        dataObject.projects.forEach(project => {
            if (localStorage.getItem(project.title) !== null) {
                project.likes = 1;
            }
        });
    });
</script>

<template>
    <h1>{{ dataObject.title }}</h1>
    <div class="title">{{ dataObject.title }}</div>
    <div v-html="dataObject.titleHTML"></div>
    <div v-bind:class="dataObject.dynamicClass" v-bind:id="dataObject.dynamicId">Dynamically assign a class and an ID to the div</div>
    <button v-bind:disabled="dataObject.disabled">You can't click this button</button><br/>
    <a v-bind:[dataObject.attribute_name]="dataObject.url">Visit my website</a><br/>
    <a v-on:[dataObject.event_name]="runFunction">Some link</a><br/>
    <div>{{ getFullName() }}</div>
    <label for="age">What is your age?</label>
    <input type="number" v-model="dataObject.age" class="form-control" id="age"/>
    <h2 v-if="dataObject.age > 21">{{ dataObject.movieTitle }}</h2>
    <h2 v-else-if="dataObject.age > 18">{{ dataObject.movieTitle }} | Watch with an adult</h2>
    <p v-else>Sorry you are too young to see this movie</p>
    <ul>
        <li v-for="(project, index) in dataObject.projects" :key="index">{{ project.title }}</li>
    </ul>

    <div class="projects" v-for="(project) in dataObject.projects">
        <h1>{{ project.title.toUpperCase() }}</h1>
        <input type="text" v-model="project.title" aria-label="project title"/>
        <p>Lorem ipsum dolor sit amet.</p>
        <div>Like
            <i class="fas fa-heart fa-lg fa-fw" 
                @click.left="likeProject(project)"
                @click.right.prevent="removeLike(project, $event)">
            </i>
            {{ project.likes }}
        </div>
    </div>

    <h2>What do you want to tweet about today?</h2>
    <form v-on:submit.prevent="submitData">
        <div class="form_group">
            <label for="tweet">Tweet:</label>
            <textarea id="tweet" name="tweet" v-model="tweet" placeholder="What's happening today?" class="form-control" cols="80" rows="10" maxlength="200"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Tweet</button>
    </form>
    <!--<div>
        <span v-if="tweet.length <= max_length">{{ `Max: ${tweet.length} of ${max_length} characters` }}</span>
        <span class="errorMessage" v-else>{{ `Max char limit reached! Excess chars: ${max_length - tweet.length}` }}</span>
    </div>-->
    <div>
        <span v-if="tweet.length <= dataObject.max_length">{{ maxCharsText }}</span>
        <span class="errorMessage" v-else>{{ errorMessage }}</span>
    </div>
    <ul>
        <li v-for="text in tweets">{{ text }}</li>
    </ul>
    <TestComponent></TestComponent>
    <TweetMessage text="This is a component" date="25/12/2020"></TweetMessage>

    <TweetSection title="Latest Tweets">
        <TweetMessage text="This is my first tweet"></TweetMessage>
        <TweetMessage text="This is my second tweet"></TweetMessage>
        <TweetMessage text="This is my third tweet"></TweetMessage>
        <TweetMessage text="This is my fourth tweet"></TweetMessage>
    </TweetSection>
</template>

<style scoped>

</style>
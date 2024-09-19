import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru'],
		resources: {
			en: {
				translation: {
					home: 'home',
					projects: 'projects',
					contact: 'contact',
					name: 'Evgeny Bedarev',
					info: 'Junior frontend developer',
					layout: 'layout',
					react: 'react',
					weatherAppName: 'A weather app',
					noteTakingAppName: 'Note taking app',
					taskManagerAppName: 'Task manager app',
					contactMe: 'Contact me',
				},
			},

			ru: {
				translation: {
					home: 'главная',
					projects: 'проекты',
					contact: 'контакты',
					name: 'Евгений Бедарев',
					info: 'Junior frontend разработчик',
					layout: 'вёрстка',
					react: 'react',
					weatherAppName: 'Приложение погоды',
					noteTakingAppName: 'Приложение заметок',
					taskManagerAppName: 'Менеджер задач',
					contactMe: 'Свяжитесь со мной',
				},
			},
		},
	});

export default i18n;

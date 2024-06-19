## Решение позволяет отделить разработку фронтенд части при реализации интерфейсов для ELMA365.

Сборка позволяет писать на React, TypeScript и SCSS.

## Установка:

1. npm i
2. npm install -g gulp-cli (если не установлен глобально)
3. в VSCode должно быть установлено расширение Prettier
4. в настройках VSCode установите параметр Default Formatter - Prettier, Format On Save - true

Внимание: gulpfile.js настроен под текущую структуру проекта. Изменения структуры могут потребовать доработки gulpfile.js.

## Для запуска режима разработки используйте команду

```
gulp
```

## Для запуска создания bundle файла для деплоя используйте команду

```
gulp deploy
```

## Подключение анализатора кода SonarQube

1. подключите репозиторий к SonarQube
2. скопируйте ключ проекта из SonarQube в файл sonar-project.properties
3. активируйте раннер в вашем репозитории через Settings -> CI/CD -> Runners -> Assigned project runners -> активируйте раннер #30 (yw9uwKbXs)
4. теперь можно делать коммит и пуш






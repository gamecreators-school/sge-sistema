// Configuração do SGE
const CONFIG = {
    SHEETS_API_URL: localStorage.getItem('sheetsApiUrl') || '',
    SHEETS: {
        STUDENTS: 'Alunos',
        TEACHERS: 'Professores',
        CLASSES: 'Turmas',
        COURSES: 'Cursos',
        ATTENDANCE: 'Presenca',
        FINANCIAL: 'Financeiro'
    }
};

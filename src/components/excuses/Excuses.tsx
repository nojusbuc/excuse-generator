import { Excuse } from '../../interfaces/excuse';
import ExcuseCard from './Excuse';
import { useState } from 'react';
interface ExcusesProps {
    excuses: Excuse[];
    setExcuses: React.Dispatch<React.SetStateAction<Excuse[]>>;
    excusesPerPage: number;
    currentPage: number;
}

const Excuses: React.FC<ExcusesProps> = ({ excuses, setExcuses, excusesPerPage, currentPage }) => {

    const deleteExcuse = (id: string) => {
        setExcuses(excuses.filter((excuse) => excuse.id !== id));
    };

    const sliceStart = excusesPerPage * (currentPage - 1);

    return (
        <div>
            {excuses.slice(sliceStart, sliceStart + excusesPerPage).map((excuse) => (
                <ExcuseCard
                    key={crypto.randomUUID()}
                    title={excuse.title}
                    dateCreated={excuse.dateCreated}
                    content={excuse.content}
                    deleteExcuse={() => deleteExcuse(excuse.id)}
                />
            ))}
        </div>
    );
}

export default Excuses;

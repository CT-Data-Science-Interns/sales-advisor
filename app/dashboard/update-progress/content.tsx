"use client";
import type { KanbanBoard } from "@/types/progress-contents.d.ts";
import type { FC } from "react";
import { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import type { KanbanPageData } from "./page.tsx";

const KanbanPageContent: FC<KanbanPageData> = function ({ kanbanBoards }) {
  const [list, setList] = useState<KanbanBoard[]>(kanbanBoards);
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const [changesSaved, setChangesSaved] = useState<boolean>(false);

  useEffect(() => {
    const isBoardOrderChanged =
      JSON.stringify(kanbanBoards) !== JSON.stringify(list);
    setUnsavedChanges(isBoardOrderChanged);
  }, [kanbanBoards, list]);

  const handleSave = () => {
    setUnsavedChanges(false);
    setChangesSaved(true);

    setTimeout(() => {
      setChangesSaved(false);
    }, 3000);
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="mb-6 flex flex-wrap md:flex-nowrap items-start justify-start space-x-1 px-1 flex-shrink-0">
          {list.map((board) => (
            <div
              key={board.id}
              className="mb-8 bg-white rounded-lg border border-gray-300 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white"
            >
              <div className="py-4 text-base font-semibold text-gray-900 dark:text-gray-300">
                <p className="text-4xl ml-6">{board.title}</p>
              </div>
              <div className="m-6 space-y-4">
                <ReactSortable
                  animation={100}
                  forceFallback
                  group="kanban"
                  list={board.tasks}
                  setList={(tasks) =>
                    setList((prevList) =>
                      prevList.map((item) =>
                        item.id === board.id ? { ...item, tasks } : item
                      )
                    )
                  }
                >
                  {board.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="mb-4 w-[28rem] cursor-grab rounded-lg p-5 shadow bg-gray-500 dark:bg-gray-500"
                      style={{ backgroundColor: "#93C5FD" }}
                    >
                      <div className="flex items-center justify-between pb-4 ">
                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                          {task.name}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="pb-4 text-sm font-normal text-gray-700 dark:text-gray-400">
                          {task.address}
                        </div>
                        <div className="pb-4 text-sm font-normal text-black-700 dark:text-black-400">
                          Business Category: {task.businessCategory}
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center justify-center rounded-lg text-sm font-medium">
                            <a
                              href="#"
                              className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Read more
                              <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-4 right-4 z-50 flex justify-end">
          {unsavedChanges && (
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
              Save
            </button>
          )}
          {changesSaved && (
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">
              Changes Saved
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default KanbanPageContent;

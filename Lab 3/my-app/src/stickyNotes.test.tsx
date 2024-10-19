import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
test("renders create note form", () => {
 render(<StickyNotes />);
 const createNoteButton = screen.getByText("Create Note");
 expect(createNoteButton).toBeInTheDocument();
});
describe("StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });

 //Tests
 //read test
 test("read a note", () => {
  render(<StickyNotes />);
    //to make new notes
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea = screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

    //all the default dummy notes should be on screen
    const note1 = screen.queryByText("test note 1 title");
    const note2 = screen.queryByText("test note 2 title");
    const note3 = screen.queryByText("test note 3 title");
    const note4 = screen.queryByText("test note 4 title");
    const note5 = screen.queryByText("test note 5 title");
    const note6 = screen.queryByText("test note 6 title");
      //they should be read
      expect(note1).toBeInTheDocument();
      expect(note2).toBeInTheDocument();
      expect(note3).toBeInTheDocument();
      expect(note4).toBeInTheDocument();
      expect(note5).toBeInTheDocument();
      expect(note6).toBeInTheDocument();
    
    //create some new notes
    fireEvent.change(createNoteTitleInput, { target: { value: "New Note 1" } });
    fireEvent.change(createNoteContentTextarea, {target: { value: "some  stuff 1" },});
    fireEvent.click(createNoteButton);
    fireEvent.change(createNoteTitleInput, { target: { value: "New Note 2" } });
    fireEvent.change(createNoteContentTextarea, {target: { value: "some more stuff" },});
    fireEvent.click(createNoteButton);

    const newNote1 = screen.queryByText("New Note 1");
    const newNote2 = screen.queryByText("some more stuff");
    //they should now show on screen
    expect(newNote1).toBeInTheDocument();
    expect(newNote2).toBeInTheDocument();



 });
//  //update test
//  test("update a note", () => {
//   render(<StickyNotes />);
  
//  });
 //delete test
 test("delete a note", () => {
  render(<StickyNotes />);

  //before clicking x
  const note1 = screen.queryByText("test note 1 title");
  const note2 = screen.queryByText("test note 2 title");
  const note3 = screen.queryByText("test note 3 title");
  const note4 = screen.queryByText("test note 4 title");
  const note5 = screen.queryByText("test note 5 title");
  const note6 = screen.queryByText("test note 6 title");
  //they should all be in the document
  expect(note1).toBeInTheDocument();
  expect(note2).toBeInTheDocument();
  expect(note3).toBeInTheDocument();
  expect(note4).toBeInTheDocument();
  expect(note5).toBeInTheDocument();
  expect(note6).toBeInTheDocument();


  //clicking all the x to delete them all
  const xButton = screen.getAllByText('x');
  xButton.forEach((element) => {fireEvent.click(element);});

  //all dummy notes should be gone since x is pressed for them all
  expect(note1).not.toBeInTheDocument();
  expect(note2).not.toBeInTheDocument();
  expect(note3).not.toBeInTheDocument();
  expect(note4).not.toBeInTheDocument();
  expect(note5).not.toBeInTheDocument();
  expect(note6).not.toBeInTheDocument();


  
 });

});
